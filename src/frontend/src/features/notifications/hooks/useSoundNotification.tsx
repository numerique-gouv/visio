import useSound from 'use-sound'

// fixme - handle dynamic audio output changes
export const useNotificationSound = () => {
  const [play] = useSound('./sounds/notifications.mp3', {
    sprite: {
      participantJoined: [0, 1150],
      handRaised: [1400, 180],
      messageReceived: [1580, 300],
      waiting: [2039, 710],
      success: [2740, 1304],
    },
  })
  const triggerNotificationSound = (type: string) => {
    play({ id: type })
  }
  return { triggerNotificationSound }
}
