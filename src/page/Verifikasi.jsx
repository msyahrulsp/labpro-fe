import { Container, useToast, Center } from '@chakra-ui/react';
import { SearchBar } from '../component/Search/SearchBar';
import { PageLayout } from '../layout/PageLayout';
import { useState, useEffect } from 'react';
import { VerifikasiAkunCard } from '../component/Card/VerifikasiAkunCard';
import { VerifikasiRequestCard } from '../component/Card/VerifikasiRequestCard';
import { useRole } from '../hooks/useRole';
import { useAuth } from '../hooks/useAuth';
import { usePagination } from '../component/Pagination/PaginationUtil';
import { Pagination } from '../component/Pagination/Pagination';
import { getDataAPI } from '../util/api';
import { Loading } from '../component/Loading/Loading';

export const Verifikasi = () => {
  const [searchVal, setSearchVal] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const { isAuthorized } = useRole('admin');
  const [filter, setFilter] = useState([true, true]);
  const auth = useAuth();
  const toast = useToast();
  const pagination = usePagination({
    totalItem: data.length,
    page,
    items: data,
    itemsPerPage: 5
  })
  const searchDesc =
    "Kamu bisa gunakan search ini untuk mencari Nama, Username atau Tipe Request dari user"
  const searchQuery = ["Piye Kabare", "piye", "Penambahan"]

  const searchData = (trueVal, falseVal, val) => {
    let searchedItem = defaultData;

    if (val !== '') {
      searchedItem = searchedItem.filter(
        (item) =>
          item.nama.toLowerCase().includes(val.toLowerCase()) ||
          item.next_nama.toLowerCase().includes(val.toLowerCase())
      );
    }

    let acc = []
    if (trueVal) {
      acc = searchedItem.filter((item) => item.tipe === 'akun');
    }

    let req = []
    if (falseVal) {
      req = searchedItem.filter((item) => item.tipe === 'request');
    }

    setData(acc.concat(req).sort((a, b) => new Date(a.created) - new Date(b.created)));
    setPage(1);
  }

  const handleTrue = (e) => {
    setFilter([e.target.checked, filter[1]]);
    searchData(e.target.checked, filter[1], searchVal);
  }

  const handleFalse = (e) => {
    setFilter([filter[0], e.target.checked]);
    searchData(filter[0], e.target.checked, searchVal);
  }

  const handleChange = (e) => {
    setSearchVal(e.target.value);
    searchData(filter[0], filter[1], e.target.value);
  }

  useEffect(() => {
    document.title = "Verifikasi - BNMO";
    const fetchData = async () => {
      try {
        const dataAcc = await getDataAPI("/verification/accounts", {
          authorization: auth.getToken()
        });
        const tempAcc = dataAcc.data.map((item) => {
          return {
            id: item.id_verifikasi_akun,
            tipe: 'akun',
            nama: item.user.nama,
            next_nama: item.user.username,
            util: item.user.ktp,
            util2: item.user.norek,
            created: item.created_at,
          }
        });
        const dataReq = await getDataAPI("/verification/requests", {
          authorization: auth.getToken()
        });
        let tempReq = dataReq.data.map((item) => {
          return (
            item.history.map((item2) => {
              return {
                id: item2.id_history,
                tipe: 'request',
                nama: item.nama,
                next_nama: item2.tipe_util,
                util: item2.currency,
                util2: item2.nominal,
                created: item2.created_at,
              }
            })
          )
        });
        tempReq = [].concat.apply([], tempReq);
        const data = tempReq.concat(tempAcc)
          .sort((a, b) => new Date(a.created) - new Date(b.created));
        setData(data);
        setDefaultData(data);
        setIsLoading(false);
      } catch (err) {
        toast({
          title: "Error",
          description: err.response?.data.message ?? err.message,
          status: "error",
          position: "top",
          isClosable: true
        })
      }
    }
    if (isAuthorized) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorized])

  return (
    <PageLayout>
      {isAuthorized && !isLoading ? (
        <Container maxW={{ base: "85%", lg: "70ch" }} mt={8}>
          <SearchBar
            onChange={handleChange}
            value={searchVal}
            handleTrue={handleTrue}
            handleFalse={handleFalse}
            trueVal={filter[0]}
            falseVal={filter[1]}
            options={['Verifikasi Akun', 'Request Saldo']}
            description={searchDesc}
            query={searchQuery}
          />
          {pagination.pageItems.length > 0 && !isLoading ? (
            pagination.pageItems.map((item) => {
              return (
                item.tipe === 'request' ? (
                  <VerifikasiRequestCard
                    key={item.tipe+item.id}
                    {...item}
                  />
                ) : (
                  <VerifikasiAkunCard
                    key={item.tipe+item.id}
                    {...item}
                  />
                )
              )
            })
          ) : (
            isLoading ? <Loading /> : (
              <Center>
                Empty Data
              </Center>
            )
          )}
          <Pagination
            {...pagination}
            onPageChange={(page) => setPage(page)}
          />
        </Container>
      ) : (
        <Loading />
      )}
    </PageLayout>
  )
}