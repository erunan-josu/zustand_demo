import { useCounterStore } from '../store/counterStore'

const Button = () => {
  const { increment } = useCounterStore()
  return <button onClick={() => increment(10)}>Increment</button>
}

export default Button
