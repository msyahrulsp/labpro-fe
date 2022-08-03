## Frontend BNMO
Sebuah frontend yang dibuat oleh seseorang yang sedang mengikuti seleksi Laboratorium Programming dengan niat untuk mengerjakan tugas dari awal diberikan, tetapi pada kenyataannya malah mengaret

## How to Install
- Pastikan sudah ada [Node JS](https://nodejs.org/en/)
- Pastikan sudah ada [Git](https://git-scm.com/) juga
- Clone repo ini
```
git clone https://github.com/msyahrulsp/labpro-fe.git labpro-fe
cd labpro-fe
npm install
```

## How to Use
- Ubah file .env.example menjadi .env dengan mengubah nilai REACT_APP_API_URL sesuai kebutuhan
  - `http://localhost:5000` untuk connect ke backend di localhost (Cek [labpro-be](https://github.com/msyahrulsp/labpro-be) untuk cara setup)
  - `https://labpro-be.herokuapp.com` untuk connect ke backend yang telah di deploy
- Jalankan perintah `npm start`
- Web akan otomatis terbuka di http://localhost:3000

## Page List

| Page           | Access   | Description                                               |
|----------------|----------|-----------------------------------------------------------|
| /              | All      | Page Home                                                 |
| /login         | All      | Page Login                                                |
| /register      | All      | Page Register                                             |
| /request       | Customer | Page untuk customer melakukan request                     |
| /transfer      | Customer | Page untuk customer melakukan transfer                    |
| /history       | Customer | Page untuk customer melihat history request atau transfer |
| /profile       | Customer | Page untuk customer melihat data self                     |
| /verifications | Admin    | Page untuk admin memverifikasi request dan akun customer  |
| /search        | Admin    | Page untuk admin untuk melihat data semua user            |

## Dummy Data

| Username   | Password   | No Rekening |
|------------|------------|-------------|
| admin      | admin      | NULL        |
| customer   | customer   | 1111234567  |
| 13520161   | 13520161   | 1117654321  |
| piyekabare | piyekabare | 1114285106  |

## API Documentation
Untuk melihat dokumentasi API terkait, silahkan pergi ke link berikut
> https://app.swaggerhub.com/apis-docs/MSSP892/lab-pro/1.0.0

## Tech Stack
- NodeJS <sub>v16.14.2</sub>
- React <sub>v18.2</sub>
- Chakra UI <sub>v2.2.3</sub>

## Website Link
> https://labpro-fe.vercel.app/