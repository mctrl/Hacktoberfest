<?php
namespace Pokeapi;

class Client
{
    protected $base_uri;

    function __construct($version = 'v2')
    {
        $this->base_uri = "http://pokeapi.co/api/{$version}/";
    }

    public function get($resource, $id = null)
    {
        $endpoint = $resource;

        if (!empty($id)) {
            $endpoint .= "/{$id}/";
        }

        $client = new \GuzzleHttp\Client(['base_uri' => $this->base_uri]);

        $response = $client->request('GET', $endpoint);

        $result = json_decode($response->getBody()->getContents());

        return $result;
    }
}
