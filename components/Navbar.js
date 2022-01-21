import Link from "next/link"
import NextImage from "next/image"

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <p className="text-lg">Gozak</p>
        </a>
      </Link>
      <button className="snipcart-checkout flex items-center">
        <NextImage height="150" width="150" src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button>
    </div>
  )
}

export default Navbar
