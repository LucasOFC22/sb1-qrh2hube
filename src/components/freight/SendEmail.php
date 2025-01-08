<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../phpmailer/src/Exception.php';
require '../phpmailer/src/PHPMailer.php';
require '../phpmailer/src/SMTP.php';

// Função para enviar o e-mail
function sendQuoteEmail($data) {
    $mail = new PHPMailer(true);

    try {
        // Configurações do PHPMailer
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'noreply@fptranscargas.com.br';  // Seu e-mail de envio
        $mail->Password = 'Noreply@091124';  // Sua senha de aplicativo
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Remetente e destinatário
        $mail->From = 'noreply@fptranscargas.com.br';
        $mail->FromName = "Cotação Website";
        $mail->addAddress('lucasf.ptranscargass@gmail.com', 'Cotação - SITE');

        // Assunto
        $mail->Subject = ' Cotação de Frete';

        // Corpo do e-mail (HTML)
        $mail->isHTML(true);
        $mail->Body = generateEmailBody($data);

        // Envia o e-mail
        $mail->send();
        echo 'E-mail enviado com sucesso!';
    } catch (Exception $e) {
        echo "Erro ao enviar e-mail: {$mail->ErrorInfo}";
    }
}

// Função para gerar o corpo do e-mail com base nos dados
function generateEmailBody($data) {
    $body = "
    <h2>Cotação de Frete</h2>
    <h3>Informações da Carga</h3>
    <p><strong>Descrição:</strong> {$data['cargo']['description']}</p>
    <p><strong>Quantidade:</strong> {$data['cargo']['quantity']}</p>
    <p><strong>Peso:</strong> {$data['cargo']['weight']}</p>
    <p><strong>Valor Declarado:</strong> {$data['cargo']['value']}</p>
    <p><strong>Dimensões:</strong> {$data['cargo']['length']} x {$data['cargo']['width']} x {$data['cargo']['height']}</p>

    <h3>Dados do Remetente</h3>
    <p><strong>Nome:</strong> {$data['sender']['name']}</p>
    <p><strong>Documento:</strong> {$data['sender']['document']}</p>
    <p><strong>Telefone:</strong> {$data['sender']['phone']}</p>
    <p><strong>Email:</strong> {$data['sender']['email']}</p>
    <p><strong>Endereço:</strong> {$data['sender']['address']['street']}, {$data['sender']['address']['number']}<br>
    {$data['sender']['address']['complement']}<br>
    {$data['sender']['address']['neighborhood']} - {$data['sender']['address']['city']}/{$data['sender']['address']['state']}<br>
    CEP: {$data['sender']['address']['zipCode']}</p>

    <h3>Dados do Destinatário</h3>
    <p><strong>Nome:</strong> {$data['recipient']['name']}</p>
    <p><strong>Documento:</strong> {$data['recipient']['document']}</p>
    <p><strong>Telefone:</strong> {$data['recipient']['phone']}</p>
    <p><strong>Email:</strong> {$data['recipient']['email']}</p>
    <p><strong>Endereço:</strong> {$data['recipient']['address']['street']}, {$data['recipient']['address']['number']}<br>
    {$data['recipient']['address']['complement']}<br>
    {$data['recipient']['address']['neighborhood']} - {$data['recipient']['address']['city']}/{$data['recipient']['address']['state']}<br>
    CEP: {$data['recipient']['address']['zipCode']}</p>

    <h3>Forma de Contato</h3>
    <p><strong>Preferência:</strong> {$data['contactPreference']}</p>
    <p><strong>Contato:</strong> {$data['contactValue']}</p>
    ";

    return $body;
}

// Dados da cotação (exemplo)
$quoteData = [
    'cargo' => [
        'description' => 'Caixas de Produtos Eletrônicos',
        'quantity' => 50,
        'weight' => '500 kg',
        'value' => '10000,00',
        'length' => '120 cm',
        'width' => '80 cm',
        'height' => '60 cm'
    ],
    'sender' => [
        'name' => 'João Silva',
        'document' => '123.456.789-00',
        'phone' => '+55 11 98765-4321',
        'email' => 'joao.silva@gmail.com',
        'address' => [
            'street' => 'Rua das Palmeiras',
            'number' => '1000',
            'complement' => '',
            'neighborhood' => 'Centro',
            'city' => 'São Paulo',
            'state' => 'SP',
            'zipCode' => '01000-000'
        ]
    ],
    'recipient' => [
        'name' => 'Maria Oliveira',
        'document' => '987.654.321-00',
        'phone' => '+55 11 91234-5678',
        'email' => 'maria.oliveira@gmail.com',
        'address' => [
            'street' => 'Av. Paulista',
            'number' => '2000',
            'complement' => 'Apto 301',
            'neighborhood' => 'Bela Vista',
            'city' => 'São Paulo',
            'state' => 'SP',
            'zipCode' => '01310-000'
        ]
    ],
    'contactPreference' => 'Telefone',
    'contactValue' => '+55 11 98765-4321'
];

// Chama a função para enviar o e-mail
sendQuoteEmail($quoteData);
?>
