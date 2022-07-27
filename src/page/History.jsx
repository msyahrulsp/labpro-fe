import { Container } from '@chakra-ui/react';
import { SearchBar } from '../component/Search/SearchBar';
import { PageLayout } from '../layout/PageLayout';
import { useState, useEffect } from 'react';
import { HistoryCard } from '../component/Card/HistoryCard';

export const History = () => {
  const [searchVal, setSearchVal] = useState('');
  const [filter, setFilter] = useState([true, true])

  const handleTrue = (e) => {
    setFilter([e.target.checked, filter[1]]);
    // searchData(e.target.checked, filter[1], search);
  }

  const handleFalse = (e) => {
    setFilter([filter[0], e.target.checked]);
    // searchData(filter[0], e.target.checked, search);
  }

  const handleChange = (e) => {
    console.log(e)
  }

  useEffect(() => {
    document.title = "History - BNMO";
  }, [])

  return (
    <PageLayout>
      <Container maxW={{ base: "85%", lg: "70ch" }} mt={8}>
        <SearchBar
          onChange={handleChange}
          value={searchVal}
          handleTrue={handleTrue}
          handleFalse={handleFalse}
          trueVal={filter[0]}
          falseVal={filter[1]}
          options={['Transfer Saldo', 'Request Saldo']}
        />
        <HistoryCard tipe="request" tipeRequest="Pengiriman" />
        <HistoryCard tipe="transfer" rekeningTujuan="12345678" status="Pending" />
      </Container>
    </PageLayout>
  )
}