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
    
    </main>
  )
}
