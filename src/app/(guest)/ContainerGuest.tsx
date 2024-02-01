import '@css/form_quest.css'

export default function ContainerGuest({
    children
  }: {
    children: React.ReactNode
}): JSX.Element {
  return (
    <div className="form-guest">
        { children }
    </div>
  )
}