import {authToken} from "../stores/token";

let token;
authToken.subscribe(value => {
  token = value
})
const fetchJobs = async () => {
  const res = await fetch('http://localhost:3000/jobs', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: '*/*'
    }
  })
  const text = await res.json();
  return res.ok ? text : new Error(text)
}

const getJob = async (id) => {
  const res = await fetch(`http://localhost:3000/jobs/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: '*/*'
    }
  })
  const text = await res.json();
  return res.ok ? text : new Error(text)
}

export { fetchJobs, getJob }