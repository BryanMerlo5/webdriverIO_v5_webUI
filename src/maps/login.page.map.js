module.exports = {
    containers: {
        login: {
            btn: {
                continue: '#continue',
                iniciar_sesion: '#signInSubmit',
                login_test: '//button[contains(text(), "Login")]',
                add_note: '//h4[contains(text(), "Simple note")]'
            },
            txt: {
                email: '//input[@placeholder="Username"]',
                password: '//input[@placeholder="Password"]',
                email_ingresado: '//div[@class="a-row a-spacing-base"]/span'
            },
            lnk: {
                condiciones_uso: '//a[contains(text(), "Condi")]',
                aviso_privacidad: '//a[contains(text(), "Aviso de")][1]',
                necesitas_ayuda: '//span[contains(text(), "Necesitas")]',
                detalles: '#remember_me_learn_more_link',
                cambiar_cuenta: '#ap_change_login_claim'
        
            },
            img: {
                logo: 'i.a-icon.a-icon-logo'
            }
        },
        footer: {
            lnk: {
                aviso_privacidad: '//a[contains(text(), "Aviso de")][2]'
            }
        }
    }
  };