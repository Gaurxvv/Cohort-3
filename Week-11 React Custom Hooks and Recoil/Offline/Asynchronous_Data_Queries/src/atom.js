import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://mocki.io/v1/65fa21df-c264-4e43-8fda-e752ba3bd706"
      );
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotification",
  get: ({ get }) => {
    const allNotification = get(notifications) || {};
    return (
      (allNotification.jobs || 0) +
      (allNotification.network || 0) +
      (allNotification.notification || 0) +
      (allNotification.message || 0)
    );
  },
});
