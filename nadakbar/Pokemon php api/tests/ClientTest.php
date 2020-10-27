<?php
use Pokeapi\Client;

class ClientTest extends \PHPUnit_Framework_TestCase
{
    /**
    * @vcr pokedex.json
    */
    public function testPokedex()
    {
        $client = new Client('v1');
        $pokedex = $client->get('pokedex', 1);
        $this->assertEquals($pokedex->name, 'national');
    }

    /**
    * @vcr pokemon.json
    */
    public function testPokemon()
    {
        $client = new Client('v1');
        $pokemon = $client->get('pokemon', 1);
        $this->assertEquals(strtolower($pokemon->name), 'bulbasaur');
    }

    /**
    * @vcr type.json
    */
    public function testType()
    {
        $client = new Client('v1');
        $type = $client->get('type', 1);
        $this->assertEquals(strtolower($type->name), 'normal');
    }

    /**
    * @vcr berry.json
    */
    public function testBerry()
    {
        $client = new Client();
        $berry = $client->get('berry', 1);
        $this->assertEquals(strtolower($berry->name), 'cheri');
    }

    /**
    * @vcr berry-flavor.json
    */
    public function testBerryFlavor()
    {
        $client = new Client();
        $berryFlavor = $client->get('berry-flavor', 1);
        $this->assertEquals(strtolower($berryFlavor->name), 'spicy');
    }
}