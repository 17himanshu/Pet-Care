function addAlert(message) {
    $('#alerts').append(
        '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +message+
            ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
             '</div>');
}