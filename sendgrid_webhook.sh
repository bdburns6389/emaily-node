# For linux and MacOS replace webhook in package.json to webhook : ./sendgrid_webhook.sh
localtunnel () {
  lt -s emaily-bdburns6389 --port 5000
}
until localtunnel; do
  echo "localtunnel server crashed"
  sleep 2
done