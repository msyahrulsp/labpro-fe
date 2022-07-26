import { Container } from '@chakra-ui/react';
import { SearchBar } from '../component/Search/SearchBar';
import { PageLayout } from '../layout/PageLayout';
import { useState, useEffect } from 'react';

export const Verifikasi = () => {
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
    document.title = "Verifikasi - BNMO";
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
          options={['Verifikasi Akun', 'Request Saldo']}
        />
        {/* TODO card buat transfer ataupun request */}
      </Container>
    </PageLayout>
  )
}