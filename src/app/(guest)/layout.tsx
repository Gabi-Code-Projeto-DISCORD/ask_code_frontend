import '@css/guest.css'

export default function GuestLayout({
    children
  }: {
    children: React.ReactNode
}): JSX.Element {
  return (
    <main>
      <div className="container">
        { children }
      </div>
      <img className="background-left" alt="background-left"src="/assets/img/background-left.svg" />
      <img className="background-right" alt="background-right"src="/assets/img/background-right.svg" />
    </main>
  )
}
