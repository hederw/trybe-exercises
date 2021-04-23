let pecaXadrez = 'Cavalo';
//toLowerCase converte maiúsculo para minúculo
switch (pecaXadrez.toLowerCase()){
    case 'rei':
        console.log('Rei - Uma casa para qualquer direção');
        break;
    case 'bispo':
        console.log('Bispo - Diagonal');
        break;
    case 'rainha':
        console.log('Rainha - Qualquer direção em quantas casas quiser');
        break;
    case 'cavalo':
        console.log('Cavalo - Movimento em "L"');
        break;
    case 'torre':
        console.log('Torre - Horizonta e vertical, quantas casas quiser');
        break;
    case 'peão':
        console.log('Peão - No primeiro movimento pode-se mover até duas casa, nos demais somnete uma e sempre movimneto para frente');
        break;
    default:
        console.log('Peça Inválida');
        break;    
}