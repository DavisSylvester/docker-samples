sleep 5
echo "Seeding the database (Random Profile Data)"
/usr/bin/mongosh < /db-seed/seed.js
tail -f /dev/null

