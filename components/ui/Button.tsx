import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit' | 'reset'
    title: string
    icon?: string
    variant: string,
    full?: boolean
}

function Button(props: ButtonProps) {

    const {type, title, icon, variant, full} = props

  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button