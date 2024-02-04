"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserForm = () => {
  return (
    <form>
      <div className="mb-3">
        <div className="mb-3">
          <Label htmlFor="name" className="mb-3">
            Name
          </Label>
          <Input type="text" id="name" />
        </div>
        <Label htmlFor="age" className="mb-3">
          Age
        </Label>
        <Input type="number" id="name" />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default UserForm;
