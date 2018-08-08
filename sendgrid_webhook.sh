function localtunnel {
  lt -s emailybdburns6389 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
