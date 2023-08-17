import { ButtonContainer } from './styles.js'

export default function Button({titulo, onClick}) {
    return (
        <ButtonContainer onClick={onClick}>{titulo}</ButtonContainer>
    )
}
