SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new databases
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new TABLE
ALTER TABLE - modifies a table 
DROP TABLE - deletes a table 
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index

-- ambilkan value di column1 dan column2 dari table_name
SELECT column1, column2, ... FROM table_name;

-- ambilkan semua value dari table_name
SELECT * FROM table_name;

-- ambilkan value yang berbeda aja dicolumn1 dari table_name 
SELECT DISTINCT column1, ... FROM table_name;

-- hitung value yang berbeda aja dicolumn1 dari table_name
-- selain yang pakai ms
SELECT COUNT(DISTINCT column1) FROM table_name;

-- khusus untuk ms( microsoft access) yang pakai ms seperti firefox dan microsoft edge
SELECT Count(*) AS DistinctCountries FROM (SELECT DISTINCT column1, ... FROM table_name);

-- ambilkan value dicolumn1 dan column2 dari table_name dengan kondisi yang ditentukan
-- misal kondisinya yang bernama doi / yang bernegara indonesia
SELECT column1, column2 ... FROM table_name WHERE condition;

-- operator WHERE
  =
  <  
  >  
  <=  
  =>  
  <>        /* tidak sama bisa ditulis != */

  -- yang column1 valuenya antara 30 dan 90
  -- kebalikannya diatas
  BETWEEN   -> WHERE column1 BETWEEN 30 AND 90;
            -> WHERE column1 NOT BETWEEN 30 AND 90

  -- WILDCARD SAMA LIKE SAMA AJA 
  WILDCARD / LIKE
            -> WHERE column1 LIKE 'a%'; /* yang value column1nya diawali a */
            -> - - - - - - - - -  '%a'; - - - - - - - - - - - /* diakhiri a */
            -> - - - - - - - -  '%ay%'; - - - - - - - - - - - /* ada huruf ay */
            -> - - - - - - - - - '_r%'; - - - - - - - - - - - /* diawal huruf kedua r */
            -> - - - - - - 'a_________%' - - - - - - /* diawali a dan julah hurufnya 10 */
            -> - - - - - - - -  - 'b%s'; - - - - - - - - - - /* diawali b diakhiri s */
            -> - - - - - -  - -'L_N_ON'; - - - - - - - - - /* diawali l */

  IN        -> IN ('indonesia', 'malaysia', 'rusia'); /* yang value columnya adalah indonesia malaysia dan rusia */
            -> NOT IN - - - - - - - - -; /* yang value column1nya tidak indonesia malaysia dan rusia */

  AND       -> country='indonesia' AND city='purwodadi'; /* yang value column1nya bernegara indonesia dan kota purwodadi */

  OR        -> city='puwodadi' OR city='yogyakarta'; /* yang value column1nya berkota purwodadi / yogyakarta */

  NOT       -> NOT city='purwodadi'; /* yang value coulumn1nya bukan berkota purwodadi */

  AND OR    -> country='indonesia' AND (city='purwodadi' OR city='yogyakarta'); /* yang value column1nya bernegara indonesia dan berkota purwodadi / yogyakarta */

  NOT AND NOT-> NOT country='indonesia' AND NOT country='malaysia'; /* yang value column1nya tidak bernegara indonesia dan malaysia */

-- Mengurutkan column1 dari a - z
-- Mengrutukan column1 dari z - a 
-- Jika column1 a nya 3 row, 3 row ini akan diurutkan a - z berdasarkan value column2 jika b 5 row maka 5 row diurutkan a -z berdasarkan column2
-- urutkan column1 a - z jika a nya 3 row urutkan 3 row ini berdasarakan column2 z -a
-- Jika tidak DESC nilai defaultnya ASC
SELECT * FROM name_table ORDER BY column1;
- - - - - - - - - - - - - - - - - column1 DESC;
- - - - - - - - - - - - - - - - - column1, column2;
- - - - - - - - - - - - - - - - - column1 ASC, column2 DESC;

-- menambah data ke table_name kurung buka pertama column yang akan diisi kurung buka kedua value data yang akan ditambahkan
INSERT INTO table_name (column1, column2, column3, column5) VALUES (value_column1, .., .., value_column5);

-- Ambilkan column1 column3 column9 dari table_name yang column9 ada datanya
-- Kebalikan IS NULL jika IS NOT NULL column9 nya tidak ada datanya
SELECT column1, column3, column9 FROM table_name WHERE column9 IS NULL;
SELECT column1, column3, column9 FROM table_name WHERE column9 IS NOT NULL;

-- UPDATE data table name column1 diganti 'value' column2 diganti value yang di ganti yang bernama bernama doi
UPDATE table_name SET column1= 'value', column2= value, ... WHERE name=doi;

-- hapus data dari table_name yang bernama doi
-- hapus semua data ditable_name tanpa columnnya 
DELETE FROM table_name WHERE name=doi;
DELETE FROM table_name;

-- ambilkan semua value dari table_name yang bercolumn indonesia 10 ajah
-- limit sama seperti top
-- ambilkan semua value dari table_name yang bercolumn indonesia dan column1 nya lebih kecil atau sama dengan 10..column1 umpamakan id berarti ambilkan yang idnya dibawah 10
-- ambilkan 50% dari semua value table_name yang bercolumn indonesia 
SELECT TOP 10 * FROM table_name where column='indonesia';
SELECT * FROM table_name WHERE column='indonesia' LIMIT 10; 
SELECT * FROM table_name WHERE column='indonesia' AND column1 <= 10;
SELECT TOP 50 PERCENT * FROM table_name WHERE column='indonesia';


-- EDIT column1 diname_table pindah kecolum paling depan
ALTER TABLE name_table CHANGE column1 column1 INT not null FIRST;

-- ambilkan nilai terbesar di column1 dari table_name dan keluarin dengan ALIAS / nama column sementara max_column1
-- kebalikannya max
SELECT MAX(column1) AS max_column1 FROM table_name;
SELECT MIN(column1) AS min_column1 FROM table_name;


-- menghitung jumlah row column1 ditable_name
-- rata2 nilai value column1 ditable_name
-- menjumlahkan semua nilai value dari table_name 
SELECT COUNT(column1) FROM table_name;
SELECT AVG(column1) FROM table_name;
SELECT SUM(column1) FROM table_name;

// skip wildcard

 -- gabung table_name1 dan table_name2 ambilkan semuanya yang idnya sama aja
 -- gabung table_name1 dan table_name2 ambilkan semua value table_name1 untuk yang kanan ambilkan value table_name2 yang idnya sama dengan table_name1 jika ada yang tidak sama kasih value null
 -- kebalikannya left join
 /* full join mengambil semua value walaupun ada value yang tidak sama karna diganti dengan value null */ UNION /* type data, urutan dan jumlah column harus sama */
SELECT * FROM table_name1 INNER JOIN table_name2 ON table_name1.id=table_name2.id; 
SELECT * FROM table_name1 LEFT JOIN table_name2 ON table_name1.id=table_name2.id;
SELECT * FROM table_name1 LEFT JOIN table_name2 ON table_name1.id=table_name2.id;
SELECT * FROM users LEFT OUTER JOIN kelas ON users.kelas_id=kelas.id UNION SELECT * FROM users RIGHT OUTER JOIN kelas ON users.kelas_id=kelas.id;
SELF JOIN skip

SQL ANY ALL skip

SELECT INTO SKIP

-- salinkan column1, column2, column3 dari table_name1 kecolumn1, column2, column3 ditable_name2 
INSERT INTO table_name2(column1, column2, column3) SELECT column1, column2, column3 FROM table_name1;

CASE SKIP

IFNULL ISNULL COALESCE SKIP

CREATE PROCEDURE SKIP

-- membuat database baru
CREATE DATABASE database_name;

-- menghapus database_name
DROP DATABASE database_name;

BACKUP DATABASE SKIP

-- buat table_name isinya column1 sampai column4 beserta DATATYPE
-- buat table_name2 isi dari table_name yang bercolumn1 sampai 3 beserta valuenya
CREATE TABLE table_name (
  column1 datatype DEFAULT 'Tanpa Nama',
  column2 datatype DEFAULT 9,
  column3 datatype,
  column4 datatype,
  CHECK (column4>=20) -- penjelasan masih dibawahnya lagi
);
CREATE TABLE table_name2 AS SELECT column1, column2, column3 FROM table_name1;

-- menghapus table_name beserta column dan value
-- menghapus semua data (column dan value) ditable_name tanpa menghapus table_name;
DROP TABLE table_name;
TRUNCATE TABLE table_name;

-- menambah column beserta datatype ditable_name
-- menghapus column1 dari table_name
-- mengubah column1 beserta datatype ditable_name
ALTER TABLE table_name ADD column1 datatype;
ALTER TABLE table_name DROP COLUMN column1;
ALTER TABLE table_name ALTER COLUMN column1 datatype;

-- column tidak bisa bervalue NULL
-- column harus berbeda semua
-- gabungan antara NOT NULL dan UNIQUE
-- untuk gabungin 2 table yang berhubungan sama key PRIMARY KEY ( orang tua ) dan FOREIGN KEY ( anak nya / cabangnya )
-- column4 harus 20 keatas contoh ada diatas bagian CREATE TABLE
-- set value default jika tidak ada value yang diINSERT
NOT NULL
UNIQUE
PRIMARY KEY
FOREIGN KEY
CHECK          => ALTER TABLE table_name ADD column4 datatype CHECK ( column4 >= 20);
DEFAULT        => ALTER TABLE table_name ALTER column1 SET DEFAULT 'Tanpa Nama';
               =>ALTER TABLE table_name ALTER column1 DROP DEFAULT;
INDEX




-- Cara import file kemysql dari terminal
SOURCE /home/adib-cs/file.sql





















