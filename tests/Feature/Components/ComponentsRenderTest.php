<?php

test('Home screen can be render', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});
