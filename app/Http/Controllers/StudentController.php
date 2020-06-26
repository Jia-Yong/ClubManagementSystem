<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\StudentResource;
use App\Http\Resources\StudentCollection;
use App\Student;

class StudentController extends Controller
{
    //
    public function index()
    {
      return new StudentCollection(Student::all());
    }


    public function store(Request $request)
    {
        $student = new Student;
        $student->id = $request->input('id');
        $student->name = $request->input('name');
        $student->club_id = $request->input('club_id');
        $student->save();
    }

    public function show($id)
    {
        $student = Student::find($id);
        return new StudentResource($student);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);
        $student->name = $request->input('name');
        $student->club_id = $request->input('club_id');
        $student->save();
    }

    public function destroy($id)
    {
        $student = Student::find($id);
        $student->delete();

    }

}
