import { Center, Container, useToast } from '@chakra-ui/react';
import { SearchBar } from '../component/Search/SearchBar';
import { PageLayout } from '../layout/PageLayout';
import { useState, useEffect } from 'react';
import { HistoryCard } from '../component/Card/HistoryCard';
import { useRole } from '../hooks/useRole';
import { useAuth } from '../hooks/useAuth';
import { Pagination } from '../component/Pagination/Pagination';
import { usePagination } from '../component/Pagination/PaginationUtil';
import { getDataAPI } from '../util/api';
import { Loading } from '../component/Loading/Loading';

export const History = () => {
  const [searchVal, setSearchVal] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [filter, setFilter] = useState([true, true]);
  const { isAuthorized } = useRole('customer');
  const auth = useAuth();
  const toast = useToast();
  const pagination = usePagination({
    totalItem: data.length,
    page,
    items: data,
    itemsPerPage: 5
  })
  const searchDesc =
    "Kamu bisa gunakan search ini untuk mencari Tipe Request, Rekening Tujuang dan Status history"
  const searchQuery = ["Pengurangan", "111765", "Pending"]

  const searchData = (trueVal, falseVal, val) => {
    let searchedItem = defaultData;

    if (val !== '') {
      searchedItem = searchedItem.filter(
        (item) =>
          item.tipe_util.toLowerCase().includes(val.toLowerCase()) ||
          item.status.toLowerCase().includes(val.toLowerCase())
      );
    }

    let trans = []
    if (trueVal) {
      trans = searchedItem.filter((item) => item.tipe_transaksi === 'transfer');
    }

    let req = []
    if (falseVal) {
      req = searchedItem.filter((item) => item.tipe_transaksi === 'request');
    }

    setData(trans.concat(req).sort((a, b) => b.id_history - a.id_history));
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
    document.title = "History - BNMO";
    const fetchData = async () => {
      try {
        const { data } = await getDataAPI(`/history/${auth.user.username}`, {
          authorization: auth.getToken(),
        });
        const sorted = data.sort((a, b) => b.id_history - a.id_history);
        setData(sorted);
        setDefaultData(sorted);
        setIsLoading(false);
      } catch (err) {
        toast({
          title: "Error",
          description: err.response?.data.message ?? err.message,
          status: "error",
          position: "top",
          isClosable: true
        });
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
            options={['Transfer Saldo', 'Request Saldo']}
            description={searchDesc}
            query={searchQuery}
          />
          {pagination.pageItems.length > 0 && !isLoading ? (
            pagination.pageItems.map((item) => {
              return (
                <HistoryCard
                  key={item.id_history}
                  {...item}
                />
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