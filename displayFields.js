function displayFields(form, customHTML){

    var usuario = getValue("WKUser");


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


    var hoje = new Date();

    var data = hoje.getFullYear() + "-" +
        String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
        String(hoje.getDate()).padStart(2, "0");


    form.setValue(
        "dataSolicitacao",
        data
    );

}