def eh_palindromo(palavra):
    # Remove espaços em branco e converte para minúsculas
    palavra = palavra.replace("", "").lower()
    # Verifica se a palavra é igual à sua reversa
    return palavra == palavra[::-1]

# Recebe a palavra do usuário
entrada = input("MIRIM")

# Verifica se é um palíndromo e imprime o resultado
if eh_palindromo(entrada):
    print(f'"{entrada}" é um palíndromo.')
else:
    print(f'"{entrada}" não é um palíndromo.')
