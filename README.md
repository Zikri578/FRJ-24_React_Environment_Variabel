# FRJ-24_React_Environment_Variabel

Environment variables adalah variabel yang dapat digunakan untuk menyimpan dan mentransfer informasi dari sistem operasi ke aplikasi. Dalam aplikasi React, environment variables dapat digunakan untuk menyimpan informasi seperti API keys, nama database, dan lainnya yang tidak boleh dibagikan secara terbuka. Environment variables dapat disimpan di dalam file .env yang terletak di root folder aplikasi dan dapat diakses melalui proses runtime aplikasi.

Untuk mengakses environment variables dalam aplikasi React, Anda bisa menggunakan library bernama `dotenv`. Library ini akan membaca file .env dan mengisi environment variables ke dalam objek `process.env`. Anda dapat mengakses environment variables dengan menggunakan `process.env.NAMA_VARIABEL`.

Sebagai contoh, jika Anda memiliki environment variable bernama `API_KEY` yang disimpan di dalam file .env, Anda dapat mengaksesnya dengan menggunakan `process.env.API_KEY`.

Jangan lupa untuk menambahkan file .env ke dalam file .gitignore agar tidak terupload ke repository Git Anda. Sebagai tambahan, Anda juga dapat menggunakan environment variables untuk mengkonfigurasi aplikasi React Anda sesuai dengan environment yang berbeda. Misalnya, Anda dapat menggunakan environment variables untuk mengkonfigurasi API endpoint yang berbeda untuk development dan production.

Untuk mengkonfigurasi aplikasi React menggunakan environment variables, Anda dapat menggunakan library bernama `react-scripts`. Library ini merupakan bagian dari Create React App, yang merupakan tool yang disediakan oleh React untuk membuat aplikasi React dengan cepat.

Untuk menggunakan environment variables dengan `react-scripts`, Anda dapat menambahkan prefix `REACT_APP_` ke nama variabel di file .env. Sebagai contoh, jika Anda memiliki environment variable bernama `API_KEY`, maka Anda perlu menambahkan prefix `REACT_APP_` sehingga menjadi `REACT_APP_API_KEY`.

Setelah menambahkan prefix `REACT_APP_`, Anda dapat mengakses environment variable tersebut di dalam aplikasi React dengan menggunakan `process.env.REACT_APP_API_KEY`. Sebagai tambahan, Anda dapat menggunakan environment variables untuk mengkonfigurasi aplikasi React Anda sesuai dengan environment yang berbeda. Misalnya, Anda dapat menggunakan environment variables untuk mengkonfigurasi API endpoint yang berbeda untuk development dan production.

Untuk mengkonfigurasi aplikasi React menggunakan environment variables, Anda dapat menggunakan library bernama `react-scripts`. Library ini merupakan bagian dari Create React App, yang merupakan tool yang disediakan oleh React untuk membuat aplikasi React dengan cepat.

Untuk menggunakan environment variables dengan `react-scripts`, Anda dapat menambahkan prefix `REACT_APP_` ke nama variabel di file .env. Sebagai contoh, jika Anda memiliki environment variable bernama `API_KEY`, maka Anda perlu menambahkan prefix `REACT_APP_` sehingga menjadi `REACT_APP_API_KEY`.

Setelah menambahkan prefix `REACT_APP_`, Anda dapat mengakses environment variable tersebut di dalam aplikasi React dengan menggunakan `process.env.REACT_APP_API_KEY`. Sebagai tambahan, Anda dapat menggunakan environment variables untuk mengkonfigurasi aplikasi React Anda sesuai dengan environment yang berbeda. Misalnya, Anda dapat menggunakan environment variables untuk mengkonfigurasi API endpoint yang berbeda untuk development dan production.
