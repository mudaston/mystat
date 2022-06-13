import IToken from './IToken'

export default interface TokenWithRefresh extends IToken {
    refreshToken: string
}
