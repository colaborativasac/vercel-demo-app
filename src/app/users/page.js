export const revalidate = 3600

export default async function Page() {
    const data = await fetch('https://load-test2.vaope-qa.online/users')
    const users = await data.json()
    return (
      <main>
        {
          users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))
        }
      </main>
    )
}