export default function DirectToUserBackstage() {
  const toUserInfo = (author, userInfo) => {
    if (userInfo && userInfo.user_id === author) {
      if (userInfo.role === 'admin') return '/admin'
      return `/backstage/${author}`
    }
    return `/user/${author}`
  }

  return {
    toUserInfo,
  }
}
