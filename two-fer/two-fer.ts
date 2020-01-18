class TwoFer {
  static twoFer(name: string = 'you'): string {
    // if parameter is passed then it will replace the default 'you'.
    return `One for ${name}, one for me.`;
  }
}

export default TwoFer
