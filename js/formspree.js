/* Beverly Baby Care - consultation form (Formspree AJAX)
   Progressive enhancement: if this script fails to load, the form still
   posts normally to the Formspree endpoint via its action/method attributes. */
(function () {
  var form = document.getElementById('consult-form');
  if (!form) return;

  var status = document.getElementById('form-status');
  var button = document.getElementById('consult-submit');
  var buttonLabel = button ? button.textContent : '';

  function setStatus(message, state) {
    if (!status) return;
    status.textContent = message;
    status.className = 'form-status' + (state ? ' is-' + state : '');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;

    if (button) {
      button.disabled = true;
      button.textContent = 'Sending\u2026';
    }
    setStatus('Sending your request\u2026', 'pending');

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        return response.json().catch(function () { return {}; }).then(function (data) {
          return { ok: response.ok, data: data };
        });
      })
      .then(function (result) {
        if (result.ok) {
          form.reset();
          setStatus(
            'Thank you \u2014 your request has been sent. Beverly will be in touch by email shortly.',
            'success'
          );
          return;
        }

        var errors = result.data && result.data.errors;
        var message =
          errors && errors.length
            ? errors
                .map(function (e) {
                  return e.field ? e.field + ': ' + e.message : e.message;
                })
                .join(' ')
            : 'Something went wrong sending your request. Please email beverlybabycare@gmail.com and Beverly will respond directly.';
        setStatus(message, 'error');
      })
      .catch(function () {
        setStatus(
          'We could not reach the server. Please check your connection, or email beverlybabycare@gmail.com directly.',
          'error'
        );
      })
      .finally(function () {
        if (button) {
          button.disabled = false;
          button.textContent = buttonLabel;
        }
      });
  });
})();
