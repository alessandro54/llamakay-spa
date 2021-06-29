const getProfile = async (token) => {
  const res = await fetch('http://localhost:3000/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: '*/*'
    }
  })
  const text = await res.json();

  return res.ok ? text : new Error(text)
}

export { getProfile }