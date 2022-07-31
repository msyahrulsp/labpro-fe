import { Center, Container, useToast } from '@chakra-ui/react';
import { SearchBar } from '../component/Search/SearchBarNoFilter';
import { PageLayout } from '../layout/PageLayout';
import { useState, useEffect } from 'react';
import { AkunCard } from '../component/Card/AkunCard';
import { useRole } from '../hooks/useRole';
import { Loading } from '../component/Loading/Loading';
import { getDataAPI } from '../util/api';
import { usePagination } from '../component/Pagination/PaginationUtil';
import { Pagination } from '../component/Pagination/Pagination';
import { useAuth } from '../hooks/useAuth';

export const Search = () => {
  const [searchVal, setSearchVal] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const { isAuthorized } = useRole('admin');
  const auth = useAuth();
  const toast = useToast();
  const pagination = usePagination({
    totalItem: data.length,
    page,
    items: data,
    itemsPerPage: 1
  });

  const searchData = (searchVal) => {
    let searchedItem = defaultData;

    if (searchVal !== "") {
      searchedItem = searchedItem.filter(item => {
        return (
          item.nama.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.username.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.norek.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    }
    
    setData(searchedItem);
    setPage(1);
  }

  const handleChange = (e) => {
    setSearchVal(e.target.value);
    searchData(e.target.value);
  }

  useEffect(() => {
    document.title = "Search - BNMO";
    const fetchData = async () => {
      console.log(auth);
      try {
        const { data } = await getDataAPI("/users", {
          authorization: auth.getToken()
        })
        setData(data);
        setDefaultData(data);
        setLoading(false);
      } catch (err) {
        toast({
          title: "Error",
          description: err.response?.data.message,
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
      {isAuthorized && !loading ? (
        <Container maxW={{ base: "85%", lg: "70ch" }} mt={8}>
          <SearchBar
            onChange={handleChange}
            value={searchVal}
          />
          {pagination.pageItems.length > 0 && !loading ? (
            pagination.pageItems.map((item) => {
              return (
                <AkunCard key={item.id_user} {...item} />
              )
            })
          ) : (
            loading ? <Loading /> : (
              <Center>
                Empty Data
              </Center>
            )
          )}
          <Center>
            <Pagination
              {...pagination}
              onPageChange={(page) => setPage(page)}
            />
          </Center>
        </Container>
      ) : (
        <Loading />
      )}
      
    </PageLayout>
  )
}