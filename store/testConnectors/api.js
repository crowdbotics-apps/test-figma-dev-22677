import axios from "axios"
import {
  TESTCONNECTORS_USERNAME,
  TESTCONNECTORS_PASSWORD
} from "react-native-dotenv"
const testConnectors = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/22677/connectors",
  auth: {
    username: TESTCONNECTORS_USERNAME,
    password: TESTCONNECTORS_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testconnectors_get_testid_read(payload) {
  return testConnectors.get(`/testid`, { params: { id: payload.id } })
}
export const apiService = { testconnectors_get_testid_read }
