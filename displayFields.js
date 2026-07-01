function displayFields(form, customHTML){


    var usuario = getValue("WKUser");



    // ================================
    // BUSCA NOME DO USUÁRIO LOGADO
    // ================================


    var constraint = DatasetFactory.createConstraint(
        "colleagueId",
        usuario,
        usuario,
        ConstraintType.MUST
    );



    var dataset = DatasetFactory.getDataset(
        "colleague",
        null,
        [constraint],
        null
    );



    if(dataset.values.length > 0){


        form.setValue(
            "nomeSolicitante",
            dataset.values[0]["colleagueName"]
        );


    }





    // ================================
    // DATA AUTOMÁTICA
    // ================================


    var hoje = new Date();


    var data = hoje.getFullYear() + "-" +
        String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
        String(hoje.getDate()).padStart(2, "0");



    form.setValue(
        "dataSolicitacao",
        data
    );








    // ================================
    // CONTROLE DAS ETAPAS
    // ================================


    var atividade = getValue("WKNumState");





    // INÍCIO DA SOLICITAÇÃO

    if(atividade == 0 || atividade == 4){



        form.setEnabled(
            "nomeSolicitante",
            false
        );



        form.setEnabled(
            "dataSolicitacao",
            false
        );



        form.setEnabled(
            "email",
            true
        );



        form.setEnabled(
            "departamento",
            true
        );



        form.setEnabled(
            "tipoSolicitacao",
            true
        );



        form.setEnabled(
            "aprovador",
            false
        );



        form.setEnabled(
            "status",
            false
        );



    }







    // APROVAÇÃO


    if(atividade == 5){



        form.setEnabled(
            "nomeSolicitante",
            false
        );



        form.setEnabled(
            "email",
            false
        );



        form.setEnabled(
            "departamento",
            false
        );



        form.setEnabled(
            "tipoSolicitacao",
            false
        );



        form.setEnabled(
            "aprovador",
            true
        );



        form.setEnabled(
            "status",
            true
        );



    }






    // FINALIZADO


    if(atividade == 9){


        form.setEnabled(
            "nomeSolicitante",
            false
        );


        form.setEnabled(
            "email",
            false
        );


        form.setEnabled(
            "departamento",
            false
        );


        form.setEnabled(
            "tipoSolicitacao",
            false
        );


        form.setEnabled(
            "aprovador",
            false
        );


        form.setEnabled(
            "status",
            false
        );


    }



}