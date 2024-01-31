import '@css/form_quest.css'

export default function ContainerGuest({
    children
  }: {
    children: React.ReactNode
}): JSX.Element {
  return (
    <div className="form-guest">
      <div className="ball-top-right"></div>
        { children }
      <div className="ball-bottom-left"></div>
    </div>
  )
}