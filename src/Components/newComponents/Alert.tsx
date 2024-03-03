export const Alert = ({ alert }: { alert: { type: string; description: string; show: boolean } }) => {
  return alert.show ? (
    <div style={{ width: 'fit-content', margin: '0 auto', top: '100px', zIndex: '1200' }} className={`alert alert-${alert.type} `}>
      {alert.description}
    </div>
  ) : (
    ''
  )
}
