// Stock placeholders — drop your own JPGs into public/images/ and switch paths.
const stock = (id: string, width = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const images = {
  hero: stock('photo-1607472586893-adb69c1494d0', 1400),
  about: stock('photo-1621905251189-08b45d6a2699', 900),
  services: {
    emergency: stock('photo-1558611848-73f7c9691a31', 600),
    drain: stock('photo-1584622781871-e419328647e0', 600),
    waterHeater: stock('photo-1624998377812-419dcfdadbe0', 600),
    fixtures: stock('photo-1620626011761-996317b8d101', 600),
    leak: stock('photo-1542017885365-a4edb53ed855', 600),
    repipe: stock('photo-1581578731548-c63625cbecf4', 600),
  },
} as const
