import { FAQItem } from '../ui/FAQItem';
import './SectionFAQ.scss';

export const SectionFAQ = () => {
    return (
        <section className="section-faq" id='faq'>
            <h2>FAQs</h2>
            <div className="faq-area">
                <FAQItem
                    title="O que é o NomeProjeto?"
                    content="NomeProjeto é uma plataforma que permite criar uma landing page personalizada, seja um cartão de visita ou um portfólio online, com base nas informações fornecidas. A página terá um link único, acessível de forma vitalícia."
                />
                <FAQItem
                    title="Como posso criar um portfólio ou cartão de visita?"
                    content="Para criar sua página, basta preencher o formulário com suas informações (nome, profissão, email, telefone, biografia, etc.), escolher uma foto de perfil, e selecionar entre criar um portfólio ou cartão de visita. Após o pagamento, você receberá o link da página via e-mail."
                />
                <FAQItem
                    title="Quanto custa para criar um portfólio ou cartão de visita?"
                    content="O preço para criar um cartão de visita é R$19,99 e para criar um portfólio é R$39,99. Ambos os planos garantem acesso vitalício à página."
                />
                <FAQItem
                    title="Quais são as formas de pagamento aceitas?"
                    content="Atualmente, NomeProjeto aceita pagamentos via boleto bancário e cartão de crédito. Pagamentos via cartão são processados imediatamente, enquanto boletos podem levar até 3 dias úteis."
                />
                <FAQItem
                    title="Posso editar minha página depois de criada?"
                    content="Não. Após a criação e pagamento da página, ela não poderá ser editada. Certifique-se de que todas as informações estão corretas antes de finalizar o processo."
                />
                <FAQItem
                    title="Como recebo o link da minha página?"
                    content="Após a conclusão do pagamento, você receberá um link via e-mail que pode ser compartilhado com outras pessoas e acessado a qualquer momento."
                />
                <FAQItem
                    title="Minha página tem validade?"
                    content="Não, tanto o cartão de visita quanto o portfólio possuem acesso vitalício, ou seja, estarão disponíveis para você por tempo indeterminado."
                />
                <FAQItem
                    title="Posso usar qualquer foto para o meu perfil?"
                    content="Sim, você pode fazer upload de qualquer foto de perfil desde que ela respeite nossos termos de uso e não infrinja direitos autorais ou seja inapropriada."
                />
                <FAQItem
                    title="Quanto tempo leva para minha página ficar pronta?"
                    content="Se o pagamento for realizado via cartão de crédito, a página será gerada imediatamente. Pagamentos via boleto podem levar até 3 dias úteis para compensação."
                />
                <FAQItem
                    title="Como entrar em contato com o suporte?"
                    content="Você pode entrar em contato com o suporte ao cliente através do e-mail: email@suporte.com.br. Estamos à disposição para ajudar."
                />
            </div>
        </section>
    );
};