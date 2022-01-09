#!/bin/bash

# This bash script is intended to drop and re-create tables each time the program is started. is not working with windows. 

export PGPASSWORD='node_password'


echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

echo "building SQL"

psql -U node_user dragonstackdb < bin/sql/generation.sql
psql -U node_user dragonstackdb < bin/sql/dragon.sql

echo "dragonstackdb configured"


