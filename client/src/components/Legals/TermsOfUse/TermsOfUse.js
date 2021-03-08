// Composant permettant d'afficher le titre de la page 
import './TermsOfUse.css';

const TermsOfUse = (props) => {


    return (
        <>
            <div className="jumbotron jumbotron-universes p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded d-flex align-items-center">
                <div className="px-0 mx-auto jumb-div-title" >
                    <h1 className="display-4 mx-auto">Conditions Générales d'Utilisations du site</h1>
                </div>
            </div>

            <section className="termsofuse p-3 p-md-5 mx-auto col-xl-11 col-lg-11 col-md-11 col-sm-12 rounded">
                <h3> ARTICLE 1 : Objet </h3>
                <p>
                    Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique de l’utilisation du site <span className="site_name">fansstore.com</span> et de ses services.
				Ce contrat est conclu entre :
				Les gérants du site internet, ci-après désignés « l’Éditeur »,
				Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelé « l’Utilisateur ».
				Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.
			    </p>

                <h3>ARTICLE 2 : Mentions légales</h3>
                <p>
                    Pour les personnes morales :
				Le site <span className="site_name">fansstore.com</span> est édité par deux particuliers, Margaux VITEZ et Sènadé LOKO.
				La société est représentée par Margaux VITEZ et Sènadé LOKO.
				<br />
				Pour les personnes physiques :
				Le site <span className="site_name">
                    fansstore.com</span> est édité par Margaux VITEZ et Sènadé LOKO, domiciliée en France.
			    </p>

                <h3>ARTICLE 3 : accès aux services</h3>
                <p>
                    L’Utilisateur du site <span className="site_name">
                        fansstore.com</span> a accès aux services suivants :
                    <ul>
                            <li>Lecture des articles</li>
                            <li>Ajout d'articles dans le panier</li>
                            <li>Création d'un compte utilisateur sécurisé</li>
                            <li>Passage de commande</li>
                        </ul>
                <br />
				Tout Utilisateur ayant accès a internet peut accéder gratuitement et depuis n’importe où au site. Les frais supportés par l’Utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la charge de l’Éditeur.
				<br />
				Les services suivants ne sont pas accessible pour l’Utilisateur que s’il est membre du site (c’est-à-dire qu’ile st identifié à l’aide de ses identifiants de connexion) :
				-	Aucun service concerné, pas d’espace membre.
				Le site et ses différents services peuvent être interrompus ou suspendus par l’Éditeur, notamment à l’occasion d’une maintenance, sans obligation de préavis ou de justification.
			    </p>

                <h3> ARTICLE 4 : Responsabilité de l’Utilisateur</h3>
                <p>
                    L’Utilisateur assume l’entière responsabilité de l’utilisation qu’il fait des informations et contenus présents sur le site <span className="site_name">
                        fansstore.com</span>.
                    <br />
                    Tout usage du service par l'Utilisateur ayant directement ou indirectement pour conséquence des dommages doit faire l'objet d'une indemnisation au profit du site.
                    <br />
                    Le site ne permet aux membres de publier sur le site.

                <br />
				Le membre s’engage à tenir des propos respectueux des autres et de la loi et accepte que ces publications soient modérées ou refusées par l’Éditeur, sans obligation de justification.
				<br />
				En publiant sur le site, l’Utilisateur cède à la société éditrice le droit non exclusif et gratuit de représenter, reproduire, adapter, modifier, diffuser et distribuer sa publication, directement ou par un tiers autorisé.
				<br />
				L’Éditeur s'engage toutefois à citer le membre en cas d’utilisation de sa publication
			    </p>

                <h3>ARTICLE 5 : Responsabilité de l’Éditeur</h3>
                <p>
                    Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de l’Éditeur.
                <br />
                De même, la responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
                <br />
                Le site <span className="site_name">
                    fansstore.com</span> s'engage à mettre en œuvre tous les moyens nécessaires pour garantir la sécurité et la confidentialité des données. Toutefois, il n’apporte pas une garantie de sécurité totale.
                <br />
				L’Éditeur se réserve la faculté d’une non-garantie de la fiabilité des sources, bien que les informations diffusées su le site soient réputées fiables.
			    </p>

                <h3>ARTICLE 6 : Propriété intellectuelle</h3>
                <p>
                    Les contenus du site <span className="site_name">
                        fansstore.com</span> (logos, textes, éléments graphiques, vidéos, etc.) sont protégés par le droit d’auteur, en vertu du Code de la propriété intellectuelle.
				<br />
				L’Utilisateur devra obtenir l’autorisation de l’éditeur du site avant toute reproduction, copie ou publication de ces différents contenus.
				<br />
				Ces derniers peuvent être utilisés par les utilisateurs à des fins privées ; tout usage commercial est interdit.
				<br />
				L’Utilisateur est entièrement responsable de tout contenu qu’il met en ligne et il s’engage à ne pas porter atteinte à un tiers.
				<br />
				L’Éditeur du site se réserve le droit de modérer ou de supprimer librement et à tout moment les contenus mis en ligne par les utilisateurs, et ce sans justification.
			    </p>

                <h3>ARTICLE 7 : Données personnelles</h3>
                <p>
                    L’Utilisateur doit obligatoirement fournir des informations personnelles pour procéder à son inscription sur le site.
				<br />
				L’adresse électronique (e-mail) de l’utilisateur ne sera pas utlisée car ce site est un site e-commerce fictif, uniquement crée dans le cadre d’une formation.
				<br />
                    <span className="site_name">
                        fansstore.com</span> garantie le respect de la vie privée de l’utilisateur, conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
				<br />
				Le site n’est pas déclaré auprès de la CNIL.
				<br />
				En vertu des articles 39 et 40 de la loi en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit via :
				•	Par mail à margaux.vitez@hotmail.fr ;
			    </p>

                <h3>ARTICLE 8 : Liens hypertextes</h3>
                <p>
                    Les domaines vers lesquels mènent les liens hypertextes présents sur le site n’engagent pas la responsabilité de l’Éditeur de <span className="site_name">
                        fansstore.com</span>, qui n’a pas de contrôle sur ces liens.
				<br />
				Il est possible pour un tiers de créer un lien vers une page du site <span className="site_name">
                    fansstore.com</span> sans autorisation expresse de l’éditeur.
			    </p>

                <h3>ARTICLE 9 : Évolution des conditions générales d’utilisation</h3>
                <p>
                    Le site <span className="site_name">
                        fansstore.com</span> se réserve le droit de modifier les clauses de ces conditions générales d’utilisation à tout moment et sans justification.
			    </p>

                <h3>ARTICLE 10 : Durée du contrat</h3>
                <p>
                    La durée du présent contrat est indéterminée. Le contrat produit ses effets à l'égard de l'Utilisateur à compter du début de l’utilisation du service.
			    </p>

                <h3>ARTICLE 11 : Droit applicable et juridiction compétente</h3>
                <p>
                    Le présent contrat dépend de la législation française.
                    En cas de litige non résolu à l’amiable entre l’Utilisateur et l’Éditeur, les tribunaux de Bordeaux sont compétents pour régler le contentieux.
			    </p>
            </section>
        </>
    );
}

export default TermsOfUse;