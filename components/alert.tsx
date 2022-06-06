import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className="border-b bg-neutral-50 border-neutral-200 bg-black"
    >
      <Container>
        <div className="py-2 text-center text-white text-sm">
              Under development.{' '}
              <a
                href={`https://blog.yukyu.net`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                こちらのブログをみてね
              </a>
        </div>
      </Container>
    </div>
  )
}

export default Alert
