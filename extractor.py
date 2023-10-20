import pandas as pd
import psycopg2
from sqlalchemy import create_engine

# Ler o arquivo CSV em um DataFrame
df = pd.read_csv('caso_full.csv')

# Configurar uma conexão com o PostgreSQL
connection = psycopg2.connect(host='localhost', database='covid', user='postgres', password='admin')
cursor = connection.cursor()

# Criar a tabela no PostgreSQL com uma coluna de ID autoincrementada
create_table_query = f'''
    CREATE TABLE IF NOT EXISTS covid_data (
        id SERIAL PRIMARY KEY,
        {', '.join([f"{column} TEXT" for column in df.columns])}
    );
'''

cursor.execute(create_table_query)
connection.commit()

# Inserir dados no PostgreSQL sem especificar um valor para o ID
insert_query = f'''
    INSERT INTO covid_data ({', '.join(df.columns)}) VALUES ({', '.join(['%s' for _ in df.columns])});
'''

for row in df.itertuples(index=False, name=None):
    cursor.execute(insert_query, row)
    connection.commit()

# Fechar a conexão com o PostgreSQL
cursor.close()
connection.close()

print('Os dados foram inseridos no PostgreSQL com IDs automáticos.')