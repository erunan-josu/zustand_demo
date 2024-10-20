import { create } from 'zustand'

export const useCounterStore = create((set) => ({
  users: [],
  cart: [],
  count: 10,
  title: 'Counter',
  increment: (num) => set((state) => ({ count: state.count + num }))
}))
