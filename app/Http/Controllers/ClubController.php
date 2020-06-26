<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ClubResource;
use App\Http\Resources\ClubCollection;
use App\Club;

class ClubController extends Controller
{

    public function index()
    {
        return new ClubCollection(Club::all());
    }


    public function store(Request $request)
    {
        $club = new Club;
        $club->id = $request->input('id');
        $club->name = $request->input('name');
        $club->save();
    }

    public function show($id)
    {
        $club = Club::find($id);
        return new ClubResource($club);
        
    }

    public function update(Request $request, $id)
    {
        $club = Club::find($id);
        $club->name = $request->input('name');
        $club->save();
    }


    public function destroy($id)
    {
        $club = Club::find($id);
        $club->delete();
    }

}
