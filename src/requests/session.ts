
const login = async (payload) => {
  return await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ session: payload })
  })
}

const logout = async () => {

}
export { login }