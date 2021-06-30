import axios from "axios"
import {} from "react-native-dotenv"
const testConnectors = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/22677/connectors",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testconnectors_get_testid_read(payload) {
  return testConnectors.get(`/testid`, { params: { id: payload.id } })
}
export const apiService = { testconnectors_get_testid_read }
