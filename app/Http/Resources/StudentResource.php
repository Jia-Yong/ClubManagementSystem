<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class StudentResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return [
              'id' => $this->id,
              'name' => $this->name,
              'club_id' => $this->club_id,
             ];
    }
}
