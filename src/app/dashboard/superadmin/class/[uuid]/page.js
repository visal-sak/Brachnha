"use client"
import React from 'react'
import SubjectForm from '../../../../../components/Dashboard/SubjectForm'


export async function getSubjects(uuid){
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/subjects/${uuid}`,{cache: "no-store"})
    return response.json()
  }
export default async function page({params}) {
    const subjectUuid=await getSubjects(params.uuid)

  return (
    <div>
        <SubjectForm/>
    </div>
  )
}
